import React from 'react';
import NavBar from "./Components/NavBar";
import BookList from './Components/BookList';
import ThemeProvider from './Contexts/ThemeContexts';
import AuthProvider from './Contexts/AuthContext';
import ThemeToggle from './Components/ThemeToggle';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <AuthProvider>
          <NavBar />
          <BookList />
          <ThemeToggle />
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
