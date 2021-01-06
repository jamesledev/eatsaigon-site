import Navbar from '../components/Nav';
import Pdf from '../components/Pdf';
import LunchMenu from '../pdfs/lunch-menu1.pdf';
import FullMenu from '../pdfs/eatsaigon-menu.pdf';

function Menu() {
  function showLunchMenu() {
    const lunchSelector = document.querySelector('.LunchMenu');
    const dinnerSelector = document.querySelector('.DinnerMenu');
    lunchSelector.style.display = 'inline-block';
    dinnerSelector.style.display = 'none';
  }
  function showFullMenu() {
    const lunchSelector = document.querySelector('.LunchMenu');
    const dinnerSelector = document.querySelector('.DinnerMenu');
    dinnerSelector.style.display = 'inline-block';
    lunchSelector.style.display = 'none';
  }

  return (
    <div className="background">
      <div>
        <Navbar />
      </div>
      <button onClick={showLunchMenu} className="lunchMenuButton">
        Our lunch menu
      </button>
      <button onClick={showFullMenu} className="fullMenuButton">
        Our Full menu
      </button>
      <div>
        <Pdf typeOfPdf="LunchMenu" pdfImage={LunchMenu} />
      </div>
      <div>
        <Pdf typeOfPdf="DinnerMenu" pdfImage={FullMenu} />
      </div>
    </div>
  );
}
export default Menu;
