import { memo } from 'react';
import { useBase } from '../../app/hooks/useBase';
import AggregateBalanceItem from '../../components/aggregateBalance/aggregateBalanceItem';
import LargeBarChart from '../../components/charts/bar-charts/LargeBarChart';
import StackedBarChart from '../../components/charts/bar-charts/StackedBarChart';
import SimpleLineChart from '../../components/charts/line-charts/SimpleLineChart';
import RootPieChart from '../../components/charts/pie-charts/PieChart';
import HomeContacts from '../../components/contacts/HomeContacts';
import SubMenu from '../../components/menus/SubMenu';
import HomeMessages from '../../components/messages/HomeMessages';

interface IHomePage { }

export const HomePage = memo<IHomePage>(props => {
  const { t } = useBase();

  return (
    <div className="home">
      <h2>{t('menu.dashboard')}</h2>
      <section className="cols cols-4 gap-20 sub-menu">
        <SubMenu />
      </section>

      <section className="section s-activity">
        <div className="section-header">
          <h3 className="section-title">{t('activity')}</h3>
          <div>
            <div className="s-activity__mark">
              {t('last-year')}
            </div>
            <div className="s-activity__mark">
              {t('this-year')}
            </div>
          </div>
        </div>
        <div style={{ height: 350 }} >
          <LargeBarChart />
        </div>
      </section>

      <section className="section bg-gray3 section-pie-chart">
        <div className="section-content cols gap-32 gap-32x2">
          <div className="col col-1 col-g">
            <div className="in-col">
              <div className="section-header cols-sb ai-c">
                <h3 className="section-title">Pie Chart</h3>
                <div>
                  <label className="for-radio mr-30">
                    <input type="radio" value="1" name="radio-group" />
                    <em></em>
                    Chart
                  </label>
                  <label className="for-radio">
                    <input type="radio" value="2" name="radio-group" defaultChecked={true} />
                    <em></em>
                    Show value
                  </label>
                </div>
              </div>
              <div className="cols cols-3 gap-40 gap-40x2">
                <div className="col">
                  <div className="in-col">
                    <RootPieChart percent={81} color="#5149E4" title="Invoices Made" />
                  </div>
                </div>
                <div className="col">
                  <div className="in-col">
                    <RootPieChart percent={22} color="#FFB9CD" title="Clients Growth" />
                  </div>
                </div>
                <div className="col">
                  <div className="in-col">
                    <RootPieChart percent={62} color="#B9EEFF" title="Projects Done" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-2">
            <div className="in-col">
              <div className="right-chart">
                <div>
                  <SimpleLineChart />
                </div>
                <div>
                  <SimpleLineChart />
                </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray3 section-aggregateBalance">
        <div className="cols gap-32">
          <div className="col col-1">
            <AggregateBalanceItem
              leftComponent={<>
                <p className="text-regular-2 c-gray">Total Balance</p>
                <p className="h4">$ 40.123</p>
              </>}
              rightComponent={<>
                <p className="text-regular-2">Average from last month</p>
                <p className="text-regular-2 c-gray">
                  <span className="text-semibold-2 c-green">+0,5%</span> invoices sent
                </p>
              </>}
              iconBgClassName="bg-blue"
              iconFillClassName="fill-white"
              iconName={'dollar'}
            />
          </div>
          <div className="col col-2">
            <div className="in-col">
              <div className="cols gap-32">
                <div className="col">
                  <AggregateBalanceItem
                    leftComponent={<>
                      <p className="h4">$120.455</p>
                      <p className="text-regular-2 c-gray">Income</p>
                    </>}
                    rightComponent={<StackedBarChart width={56} height={64} topBgColor="#ECEFF7" bottomBgColor="#5149E4" />}
                    iconBgClassName="bg-green"
                    iconFillClassName="fill-white"
                    iconName={'chevron-down_32x32'}
                  />
                </div>
                <div className="col">
                  <AggregateBalanceItem
                    leftComponent={<>
                      <p className="h4">$86.455</p>
                      <p className="text-regular-2 c-gray">Expense</p>
                    </>}
                    rightComponent={<StackedBarChart width={56} height={64} topBgColor="#ECEFF7" bottomBgColor="#FFB9CD" />}
                    iconBgClassName="bg-red"
                    iconFillClassName="fill-white"
                    iconName={'chevron-up_32x32'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cols gap-40">
        <HomeContacts />
        <HomeMessages />
      </div>
    </div>
  )
});

