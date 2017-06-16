import {install as offlineInstall} from 'offline-plugin/runtime'


// require('./app.css')
// require('./app.scss')
// console.log('index.js');
// console.log('yo4');

const reloading = document.readyState === 'complete'
if(module.hot){
  module.hot.accept((err) => {
    console.log('HMR Error: ', err)
  })
  if(reloading){
    console.log('HRM Reloading.')
    // call onLoad
  }else{
    console.info('HMR Enabled.')
    // bootstrap
  }
}else{
  console.info(' HMR not supported')
}

if(process.env.NODE_ENV === 'production'){
  offlineInstall()
}
// System.import()

if(process.env.NODE_ENV !== 'production'){
  console.log("this is not production")
}