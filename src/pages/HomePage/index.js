import './index.css';
import GridViewIcon from '@mui/icons-material/GridView';
import SortIcon from '@mui/icons-material/Sort';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CountryRepository from '../../repository/CountryRepository';

let countries = [];

function HomePage() {

  countries = CountryRepository();

  return (
    <div className="HomePage">
      <div className='toolbar'>
        <h1 className='title'>COUNTRİES</h1>
        <input type="text" placeholder='Search'></input>
      </div>

      <div className='bottom-toolbar'>
        <div className='viewIcon'><GridViewIcon fontSize="large" sx={{ color: 'black' }} /></div>
        <div className='sortIcon'><SortIcon fontSize="large" sx={{ color: 'black' }} /></div>
        <span className="sortText">Sort</span>
        <div className='filterIcon'><FilterAltIcon fontSize="large" sx={{ color: 'black' }} /></div>
        <span className="filterText">Filter</span>
      </div>

      <div>
            {countries.map((c, index) => (
                <div >
                    <div className="info">
                      <h1>{c.id}</h1>
                      <h3>{c.name}</h3>
                      <p>Phone Code = {c.phoneCode}</p>
                    </div>
                </div>
            ))}
          </div>


    </div>

  );
}

export default HomePage;
