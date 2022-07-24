import './App.css';
import TaskForm from './app/components/TaskForm';
import TaskList from './app/components/TaskList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className='flex items-center justify-center h-full'>
        <BrowserRouter>
          <Routes>
            <Route path="/react-rtk-crud" element={<TaskList />} />
            <Route path="/create-task" element={<TaskForm />} />
            <Route path="/react-rtk-crud/edit-task/:id" element={<TaskForm />} />
          </Routes>
        </BrowserRouter>
      </div>

    </div>
  );
}

export default App;
