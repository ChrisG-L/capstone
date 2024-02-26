import { Route, Routes } from "react-router";
import HomePage from "./HomePage";
import BookingPage from './BookingPage';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </main>
  )
}
