import React, { Component } from 'react';
import axios from "axios";


class Yesturday extends Component {

    state = {
        con0: [],
        info0: [],
        info1: [],
        info2: [],
        info3: [],
        info4: [],
        now: false
    }



    componentDidMount() {


        axios.get(`https://corona.lmao.ninja/v2/countries?yesterday=true`)

            .then(res => {

                const array1 = [];
                const countires1 = res.data;

                for (let i = 0; i < countires1.length; i++) {
                    array1.push(countires1[i]);
                }

                const algeria = array1.filter(word => word.country === this.props.country);

                console.log(array1);



                const sortCases = (a, b) => (a.cases < b.cases) ? 1 : (b.cases < a.cases) ? -1 : 1;
                const sortTodayCases = (a, b) => (a.todayCases < b.todayCases) ? 1 : (b.todayCases < a.todayCases) ? -1 : 1;
                const sortTodayDeaths = (a, b) => (a.todayDeaths < b.todayDeaths) ? 1 : (b.todayDeaths < a.todayDeaths) ? -1 : 1
                const sortRecovered = (a, b) => (a.recovered < b.recovered) ? 1 : (b.recovered < a.recovered) ? -1 : 1
                const sortDeaths = (a, b) => (a.deaths < b.deaths) ? 1 : (b.deaths < a.deaths) ? -1 : 1

                const resultCases = array1.sort(sortCases).slice(0, 10);
                const resultTodayCases = array1.sort(sortTodayCases).slice(0, 10);
                const resultTodayDeaths = array1.sort(sortTodayDeaths).slice(0, 10);
                const resultRecovered = array1.sort(sortRecovered).slice(0, 10);
                const resultDeaths = array1.sort(sortDeaths).slice(0, 10);

                this.setState({ con0: algeria, info0: resultCases, info1: resultTodayCases, info2: resultTodayDeaths, info3: resultRecovered, info4: resultDeaths });
            })
    }

    render() {



        const cases = <h4 className="font-weight-bolder">Total Cases<br />اجمالي الحالات</h4>

        const nCases = <h4 className="font-weight-bolder">الحالات الجديدة<br />New Cases</h4>

        const nDeaths = <h4 className="font-weight-bolder">الوفيات الجديدة<br />New Deaths</h4>

        const recovered = <h4 className="font-weight-bolder">المتعافون<br />Recovered</h4>

        const deaths = <h4 className="font-weight-bolder">الوفيات<br /> Deaths</h4>

        return (
            <div className='w-100'>


                <div className="w-100">

                    <div className="row d-flex justify-content-around text-center bg-primary py-3">
                        <span className="h4">(الامس) احصائيات كورونا في الجزائر<br /> COVID-19 STATISTICS IN ALGERIA (Yesturday) </span>
                    </div>
                    <div className="row d-flex bg-light justify-content-around align-self-center text-center py-5">
                        <div className="col-7 col-md-4 col-lg-2  text-info mx-auto my-5 px-auto justify-content-center">
                            {cases}
                            {this.state.con0.map(country => <span key={country.country} className=''>{new Intl.NumberFormat().format(country.cases)}</span>)}
                        </div>
                        <div className="col-7 col-md-4 col-lg-2 text-danger mx-auto my-5 px-auto justify-content-center">
                            {nCases}
                            {this.state.con0.map(country => <span key={country.country} className=''>{new Intl.NumberFormat().format(country.todayCases)}</span>)}
                        </div>
                        <div className="col-7 col-md-4 col-lg-2 text-secondary mx-auto my-5 px-auto justify-content-center">
                            {nDeaths}
                            {this.state.con0.map(country => <span key={country.country} className=''>{new Intl.NumberFormat().format(country.todayDeaths)}</span>)}
                        </div>
                        <div className="col-7 col-md-4 col-lg-2 text-primary mx-auto my-5 px-auto justify-content-center">
                            {recovered}
                            {this.state.con0.map(country => <span key={country.country} className=''>{new Intl.NumberFormat().format(country.recovered)}</span>)}
                        </div>
                        <div className="col-7 col-md-4 col-lg-2 mx-auto my-5 px-auto justify-content-center">
                            {deaths}
                            {this.state.con0.map(country => <span key={country.country} className=''>{new Intl.NumberFormat().format(country.deaths)}</span>)}

                        </div>

                    </div>

                </div>

                <div>
                    <div className="row d-flex justify-content-around text-center bg-primary py-3">
                        <span className="h4">(الامس) احصائيات كورونا في العالم<br /> COVID-19 STATISTICS IN THE WORLD (Yesturday) </span>
                    </div>

                    <div className=" row d-flex bg-light justify-content-around align-self-center text-center py-5">
                        <div className="col-7 col-md-4 col-lg-2  text-info mx-auto my-5 px-auto justify-content-center">
                            {cases}
                            <ul className="list-group">
                                {this.state.info0.map(country => <li key={country.country} className=''>{country.country}  : {new Intl.NumberFormat().format(country.cases)} </li>)}
                            </ul>
                        </div>
                        <div className="col-7 col-md-4 col-lg-2 text-danger mx-auto my-5 px-auto justify-content-center">
                            {nCases}
                            <ul className="list-group">
                                {this.state.info1.map(country => <li key={country.country}>{country.country}  : {new Intl.NumberFormat().format(country.todayCases)} </li>)}
                            </ul>
                        </div>
                        <div className="col-7 col-md-4 col-lg-2 text-secondary mx-auto my-5 px-auto justify-content-center">
                            {nDeaths}
                            <ul className="list-group">
                                {this.state.info2.map(country => <li key={country.country}>{country.country}  : {new Intl.NumberFormat().format(country.todayDeaths)} </li>)}
                            </ul>
                        </div>
                        <div className="col-7 col-md-4 col-lg-2 text-primary mx-auto my-5 px-auto justify-content-center">
                            {recovered}
                            <ul className="list-group">
                                {this.state.info3.map(country => <li key={country.country}>{country.country}  : {new Intl.NumberFormat().format(country.recovered)} </li>)}
                            </ul>
                        </div>

                        <div className="col-7 col-md-4 col-lg-2 mx-auto my-5 px-auto justify-content-center">
                            {deaths}
                            <ul className="list-group">
                                {this.state.info4.map(country => <li key={country.country}>{country.country}  : {new Intl.NumberFormat().format(country.deaths)} </li>)}
                            </ul>

                        </div>

                    </div>


                </div>

            </div>


        )
    }
}

export default Yesturday;