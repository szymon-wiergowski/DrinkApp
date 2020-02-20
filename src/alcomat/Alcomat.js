import React from 'react';
import AlcomatApp from './components/AlcomatApp'
import AlcomatLogout from './components/AlcomatLogout'

class Alcomat extends React.Component {

    state = {
        beer: 0,
        wine: 0,
        vodka: 0,
        hours: 0,
        promiles: null,
    }

    handleChange = (e) => {
        e.preventDefault()
        const name = e.target.name
        let value = e.target.value
        this.setState({
            [name]: value
        })
    }

    round = (n, k) => {
        let factor = Math.pow(10, k);
        return Math.round(n * factor) / factor;
    }

    calculatePromiles = () => {
        let metabolism = 0.15
        if (this.props.userData.gender === "Kobieta") {
            metabolism = 0.12
        }
        const alcohol = (this.state.wine * 0.1) + (this.state.vodka * 0.33) + (this.state.beer * 0.04)
        let gender = 0.7
        if (this.props.userData.gender === "Kobieta") {
            gender = 0.6
        }
        const promilesValue = (alcohol / (gender * this.props.userData.weight)) - (this.state.hours * metabolism)
        const promiles = this.round(promilesValue, 2)
        if (promiles > 0) {
            this.setState({
                promiles,
            })
        } else {
            this.setState({
                promiles: 0
            })
        }
    }

    render() {
        const handleChange = this.handleChange.bind(this);
        const calculatePromiles = this.calculatePromiles.bind(this);
        const { user, userData } = this.props
        const { promiles } = this.state
        if (user === null) {
            return (
                <AlcomatLogout />
            )
        } else {
            return (
                <AlcomatApp userData={userData} promiles={promiles} calculatePromiles={calculatePromiles} handleChange={handleChange} />
            )
        }
    }
}
export default Alcomat;