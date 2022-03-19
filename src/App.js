import React from 'react';
import Navbar from './components/Navbar';
import People from './components/People';
import Planets from './components/Planets';

function App() {
  const [page, setPage] = React.useState('planets');
  return (
    <>
      <div className="App">
        <h1>스타워즈 인포</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          {page === 'planets' ? <Planets /> : <People />}
        </div>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </div>
    </>
  );
}

export default App;
