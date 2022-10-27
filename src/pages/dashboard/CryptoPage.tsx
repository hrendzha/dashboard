import CryptoLineChart from '../../components/charts/line-charts/CryptoLineChart';
import BitcoinLineChart from '../../components/crypto/BitcoinLineChart';
import EthereumLineChart from '../../components/crypto/EthereumLineChart';
import LitecoinLineChart from '../../components/crypto/LitecoinLineChart';

interface ICryptoPage { }

export default function CryptoPage(props: ICryptoPage) {
  return (
    <div className="crypto">
      <h2>Crypto</h2>
      <div className="cols cols-3 gap-32">
        <div className="col col-1">
          <section className="in-col bg-gray3">
            <BitcoinLineChart />
          </section>
        </div>
        <div className="col col-2">
          <section className="in-col bg-gray3">
            <LitecoinLineChart />
          </section>
        </div>
        <div className="col col-3">
          <section className="in-col bg-gray3">
            <EthereumLineChart />
          </section>
        </div>
      </div>
      <div className="section">
        <div className="cols cols-3">
          <div className="col col-1">
            <div>
              <details className="details-down">
                <summary>Bitcoin</summary>
                <div className="down-content">
                  <ul>
                    <li>Bitcoin</li>
                    <li>Litecoint</li>
                    <li>Ethereum</li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
          <div className="col col-2"></div>
          <div className="col col-3"></div>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}
