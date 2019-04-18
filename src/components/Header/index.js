import React from 'react';
import {Row,Col} from "antd";
import "./index.less"
import Util from '../../utils/utils'
import Axios from '../../http/axios'
export default class Header extends React.Component{
   async componentWillMount() {
        this.setState({
            userName:"河畔一角"
        })
        setInterval(()=>{
           let sysTime =  Util.formatDate(new Date().getTime());
            this.setState({
                sysTime
            })
        },1000);
        try {
            const {results} = await this.getWeherApiData();
            console.log(results);
            this.setState({
                dayPictrueUrl:results[0].weather_data[0].dayPictureUrl,
                weather:results[0].weather_data[0].weather

            })
        }catch (e) {
            console.log(e);
        }
    }
    async getWeherApiData(){
        let city = '长沙';
        return await Axios.jsonp({
            url:`http://api.map.baidu.com/telematics/v3/weather?location=${encodeURIComponent(city)}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
        });
    }
    render() {
        return(
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>{this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span={20} className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-img"><img src={this.state.dayPictrueUrl} alt=""/></span>
                        <span className="weather-detail">{this.state.weather}</span>
                    </Col>
                </Row>
            </div>
        )
    }
}
