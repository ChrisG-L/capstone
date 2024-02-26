import React, { useReducer, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';

function BookingForm({ availableTimes, upTime, confirmForm }) {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      date: '',
      time: availableTimes.times[0],
      guests: 1,
      occasion: 'Birthday'
    },
    validationSchema: Yup.object({
      date: Yup.date().required('Date is required'),
      time: Yup.string().required('Time is required'),
      guests: Yup.number().required('Number of guests is required').min(1, 'Minimum 1 guest').max(10, 'Maximum 10 guests'),
      occasion: Yup.string().required('Occasion is required')
    }),
    onSubmit: values => {
      confirmForm(values)
    }
  });

  useEffect(() => {
    if (formik.values.date) {
      upTime({ type: "UPDATE_TIMES", date: new Date(formik.values.date) });
    }
    console.log('OK')
  }, [formik.values.date, upTime]);

  return (
    <form onSubmit={formik.handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="date"
        onChange={formik.handleChange}
        value={formik.values.date}
      />
      {formik.errors.date ? <div style={{ color: 'red' }}>{formik.errors.date}</div> : null}

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="time"
        onChange={formik.handleChange}
        value={formik.values.time}
      >
        {availableTimes.times.map((time) => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>
      {formik.errors.time ? <div style={{ color: 'red' }}>{formik.errors.time}</div> : null}

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        onChange={formik.handleChange}
        value={formik.values.guests}
        min="1"
        max="10"
      />
      {formik.errors.guests ? <div style={{ color: 'red' }}>{formik.errors.guests}</div> : null}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        onChange={formik.handleChange}
        value={formik.values.occasion}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Other">Other</option>
      </select>
      {formik.errors.occasion ? <div style={{ color: 'red' }}>{formik.errors.occasion}</div> : null}
      <button type="submit">Make Your reservation</button>
    </form>
  );
}

const seededRandom = (seed) => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

export const fetchAPI = (date) => {
  const result = [];
  const random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    };
    if (random() < 0.5) {
      result.push(i + ":30");
    };
  };
  return result;
}

export function submitAPI(formData) {
  return true;
};

export const initializeTimes = () => {
  const today = new Date();
  return { times: fetchAPI(today) };
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return { ...state, times: fetchAPI(action.date) };
    default:
      return state;
  };
};

export default function BookingPage() {
  const [availableTimes, upTime] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate()

  function confirmForm(values) {
    if (submitAPI(values))
      navigate('/confirm')
    console.log(values);
  }

  return (
    <div>
      <h1>BookingPage</h1>
      <BookingForm availableTimes={availableTimes} upTime={upTime} confirmForm={confirmForm}/>
    </div>
  )
}
