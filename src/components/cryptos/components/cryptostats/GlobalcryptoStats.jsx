import React from 'react';
import { Statistic, Card } from 'antd';
import useCryptomarkets from '../../hooks/useCryptomarkets';
import useCryptostats from '../../hooks/useCryptostats';
import millify from 'millify';

const GlobalcryptoStats = () => {
    let { GlobalStats, isloading } = useCryptomarkets();
    let { stats, isloading: loading } = useCryptostats();

    // Ensure values are numbers and avoid undefined errors
    const totalCoins = Number(GlobalStats?.totalCoins) || 0;
    const totalMarketCap = Number(GlobalStats?.totalMarketCap) || 0;
    const total24hVolume = Number(GlobalStats?.total24hVolume) || 0;
    const totalMarkets = Number(GlobalStats?.totalMarkets) || 0;
    const totalExchanges = Number(GlobalStats?.totalExchanges) || 0;
    const total = Number(GlobalStats?.total) || 0;

    return (
        <div className='container-fluid p-3'>
            <div className="row">
                <div className="col-6 col-sm-4 col-md-2 col-lg-2 my-2 ">
                    <Card bordered={true} loading={loading} className="global-card">
                        <Statistic value={totalCoins} title="Total Coins" valueStyle={{ color: 'red' }} />
                    </Card>
                </div>
                <div className="col-6 col-sm-4 col-md-2 col-lg-2 my-2">
                    <Card bordered={true} loading={loading} className="global-card">
                        <Statistic value={millify(totalMarketCap)} title="Total Market Cap" valueStyle={{ color: 'green' }} />
                    </Card>
                </div>
                <div className="col-6 col-sm-4 col-md-2 col-lg-2 my-2">
                    <Card bordered={true} loading={loading} className="global-card">
                        <Statistic value={millify(total24hVolume)} title="24h Volume" valueStyle={{ color: 'green' }} />
                    </Card>
                </div>
                <div className="col-6 col-sm-4 col-md-2 col-lg-2 my-2">
                    <Card bordered={true} loading={loading} className="global-card"> 
                        <Statistic value={totalMarkets} title="Total Markets" valueStyle={{ color: 'green' }} />
                    </Card>
                </div>
                <div className="col-6 col-sm-4 col-md-2 col-lg-2 my-2">
                    <Card bordered={true} loading={loading} className="global-card">
                        <Statistic value={totalExchanges} title="Total Exchanges" valueStyle={{ color: 'green' }} />
                    </Card>
                </div>
                <div className="col-6 col-sm-4 col-md-2 col-lg-2 my-2">
                    <Card bordered={true} loading={loading} className="global-card">
                        <Statistic value={total} title="Total" valueStyle={{ color: 'red' }} />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default GlobalcryptoStats;

