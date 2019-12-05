import { checkAge } from 'utils/helpers'

function canIDrive(age){
    const drive = checkAge(age);

    if(drive) return 'You can drive'

    return 'You cant drive'
}

export default canIDrive;