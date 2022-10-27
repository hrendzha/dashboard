import { useBase } from '../../app/hooks/useBase';
import { formatMoney, formatPercent } from '../../helpers/misc';
import CryptoLineChart from '../charts/line-charts/CryptoLineChart';
import { SvgIcon } from '../sprite/SvgIcon';

interface ILineChartItem {
  nameKey: string;
  data: Array<any>;
  totalSum: number;
  percentageIndicator: number;
  strokeColor: string;
}

export default function LineChartItem(props: ILineChartItem) {
  const { t } = useBase();
  return (
    <>
      <h3 className="text-semibold-1">{t(props.nameKey)}</h3>
      <div className="section-content cols gap-26">
        <div className="col col-1">
          <div className="in-col">
            <CryptoLineChart
              data={props.data}
              strokeColor={props.strokeColor}
              strokeWidth={3}
            />
          </div>
        </div>
        <div className="col col-2 f-c">
          <div className="in-col fc-se">
            <div className="h3">
              {formatMoney(props.totalSum)}
            </div>
            <div className="if-c">
              <span className="mr-8">{formatPercent(props.percentageIndicator / 100)}</span>
              <span>
                {props.percentageIndicator > 0 && (<SvgIcon fillClassName="fill-white" name="indicator-up_24x24" size={24} />)}
                {props.percentageIndicator < 0 && (<SvgIcon fillClassName="fill-white" name="indicator-down_24x24" size={24} />)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
