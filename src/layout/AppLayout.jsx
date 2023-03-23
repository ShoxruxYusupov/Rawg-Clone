import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import SideBar from '../components/sideaBar/SideBar';
import { useSinglePage } from '../hooks/useApp';

export function AppLayout() {
  const { isSingle } = useSinglePage();
  return (
    <div
      className={isSingle ? 'App' : ''}
      style={
        isSingle
          ? {
              backgroundImage: `linear-gradient(to top, #151515, #151515fe, #151515f9, #151515bf), url(${isSingle})`,
              backgroundColor: 'var(--main-bg-color)'
            }
          : {
              backgroundColor: 'var(--main-bg-color)'
            }
      }
    >
      <div className="container">
        <div className="head">
          <Header />
        </div>
        <div className="layout">
          <SideBar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
