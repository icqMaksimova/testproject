$(document).ready(function(){
  //автозаполнение селекта
  var currentYear = (new Date()).getFullYear() - 18;
  var years = '';
  for(var i=currentYear;i>currentYear-50;i--){
    years += '<option value="'+i+'">'+i+'</option>';
  }
  $('.yearoptions').html(years);

  $('.styledselect').each(function(){
    var str = '';
    $(this).find('select option').each(function(){
      str += '<div class="styledselect__option" data-value="'+$(this).attr('value')+'">'+$(this).html()+'</div>';
    });
    $(this).find('.styledselect__options .scrollable').html(str);
  });
  $('.styledselect').on('click',function(e){
    $(this).toggleClass('open');
  });
  $('.styledselect__options .scrollable div').on('click',function(e){
    $(this).addClass('active').siblings().removeClass('active');
    var parent = $(this).parents('.styledselect');
    parent.addClass('selected').children('.styledselect__val').html($(this).html());
    parent.find('select option[value="'+$(this).attr('data-value')+'"]').prop('selected',true);
  });
  $('.styledselect').each(function(){
    var value = $(this).attr('data-val');
    if(value){
      $(this).find('.styledselect__option[data-value="'+value+'"]').click();
      $(this).removeClass('open');
    }
  });

  $('.header__mobilemenu').on('click',function(e){
    $('.header__menu').addClass('open');
  });
  $('.header__menu a').on('click',function(e){
    e.preventDefault();
    var href = $(this).attr('href');
    $('.header__menu').removeClass('open');
    $('html,body').animate({
      scrollTop: $(href).offset().top+'px'
    },300);
    return false;
  });

  $('#range').slider({
    animate: "slow",
    range: "min",
    min: 0,
    max: 100,
    value: $('#range').attr('data-value')
  });
  $('.scrollable').mCustomScrollbar();
});
