import DS from 'ember-data';


export default DS.RESTAdapter.extend({
    host:'http://127.0.0.1:9000',
 
    corsWithCredentials: true,
    crossDomain: true,
    xhrFields: { withCredentials: true },
});
  
