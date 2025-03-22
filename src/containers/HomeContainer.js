import {connect} from "react-redux"
import Home from "./../components/Home"
import {addToCard} from "../services/actions/actions"

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => {
    addToCardHadler : data => dispatch(addToCard(data))
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)