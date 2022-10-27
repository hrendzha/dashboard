import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks/redux';
import { useBase } from '../../app/hooks/useBase';
import { query } from '../../app/redux/subMenuStatistics';
import SubMenuItem from './SubMenuItem';

interface ISubMenu {
}

export default function SubMenu(props: ISubMenu) {
  const statistics = useAppSelector(state => state.subMenuStatistics);
  const dispatch = useDispatch();

  useEffect(() => {
    const intervalId1 = setInterval(() => {
      dispatch(query('projects'));
    }, 1000);

    const intervalId2 = setInterval(() => {
      dispatch(query('sideProjects'));
    }, 3000);

    const intervalId3 = setInterval(() => {
      dispatch(query('investment'));
    }, 4500);

    const intervalId4 = setInterval(() => {
      dispatch(query('assets'));
    }, 2500);

    return () => {
      clearInterval(intervalId1);
      clearInterval(intervalId2);
      clearInterval(intervalId3);
      clearInterval(intervalId4);
    };
  }, []);
  return (
    <>
      <SubMenuItem iconName="projects" titleKey="projects" count={statistics.projects} iconFill="fill-blue" />
      <SubMenuItem iconName="side-projects" titleKey="side-projects" count={statistics.sideProjects} iconFill="fill-pink" />
      <SubMenuItem iconName="investment" titleKey="investment" count={statistics.investment} iconFill="fill-green" />
      <SubMenuItem iconName="assets" titleKey="assets" count={statistics.assets} iconFill="fill-red" />
    </>
  )
}
