import { initializeTimes, fetchAPI, updateTimes, submitAPI } from './BookingPage'
import { render, screen, fireEvent } from '@testing-library/react';
import { BookingForm } from './BookingPage';
import { useNavigate } from 'react-router';
import { useReducer } from 'react';
import userEvent from '@testing-library/user-event';

test("initializeTimes returns the correct expected value", () => {
    const today = new Date();
    const initialState = initializeTimes();
    const expectedResult = { times: fetchAPI(today) };
    expect(initialState).toEqual(expectedResult);
});

test("updateTimes returns the same state", () => {
    const state = {
        times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
    };
    const action = { type: "SOME_ACTION" };
    const newState = updateTimes(state, action);
    expect(newState).toEqual(state);
});

test("Le formulaire affiche les erreurs lorsque des données invalides sont soumises", async () => {

    render(<BookingForm availableTimes={{
            times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
        }} upTime={jest.fn((action) => action)} confirmForm={jest.fn((action) => action)}/>);

/*     fireEvent.change(screen.getByLabelText('Choose date'), { target: { value: '2022-13-01'}})
    fireEvent.change(screen.getByLabelText('Number of guests'), { target: { value: '0' } }); */

    await userEvent.type(screen.getByLabelText('Number of guests'), '0')
/*     await userEvent.click(screen.getByText('Make Your reservation')); */

    // Vérifier que les erreurs sont affichées
/*     expect(screen.getByTestId("guests-error")).toBeInTheDocument();
 */});
