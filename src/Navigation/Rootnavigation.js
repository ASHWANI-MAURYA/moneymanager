import {NavigationContainer} from '@react-navigation/native'
import AuthNavigators from './AuthNavigators';
function Root (){
    return(
        <NavigationContainer>
<AuthNavigators/>
        </NavigationContainer>
    )
}
export default Root;