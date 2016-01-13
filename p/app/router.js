import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('category', function() {
    this.route('new');

    this.route('show',{
      path: ':category_id'
    },function(){
      this.route('subcategory',{resetNamespace:true},function(){
        this.route('new');

        this.route('show',{
          path: ':subcategorr_id'
        },function(){
          this.route('subcategory',{resetNamespace:true},function(){
            this.route('new');
            this.route('show',{
              path: ':pay_id'
            }),
            this.route('edit', {
              path: ':pay_id/edit'
            })
          });
        });

        this.route('edit', {
          path: ':subcategory_id/edit'
        });

      });
    });
    this.route('edit', {
      path: ':friend_id/edit'
    });
  });



  //this.route('category');
  //this.route('subcategory', function() {
  //  this.route('pay', function() {
  //    this.route('new');
  //    this.route('show');
  //    this.route('edit');
  //  });
  //  this.route('edit');
  //});
  //this.route('new');
  //this.route('edit');
});

export default Router;
