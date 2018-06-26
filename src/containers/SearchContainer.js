import { connect } from 'react-redux';
import Search from '../Components/Search';
import { searchNewsSelector } from '../selectors/newsSelectors';
import {bindActionCreators} from 'redux';





const mapStateToProps=state=>({
    filteredNews: searchNewsSelector(state)
});


const mapDispatchToProps=() => (
    bindActionCreators({ searchNews }, dispatch)
)

export default connect(mapStateToProps,mapDispatchToProps)(Search)
