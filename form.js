//$(document).ready(function() {

// document.addEventListener('DOMContentLoaded', function(){
//     $('#visit').bootstrapValidator({
//         // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
//         feedbackIcons: {
//             valid: 'glyphicon glyphicon-ok',
//             invalid: 'glyphicon glyphicon-remove',
//             validating: 'glyphicon glyphicon-refresh'
//         },
//         fields: {
//             firstname: {
//                 validators: {
//                         stringLength: {
//                         min: 2,
//                     },
//                         notEmpty: {
//                         message: 'Please enter your First Name'
//                     }
//                 }
//             },
//              lastname: {
//                 validators: {
//                      stringLength: {
//                         min: 2,
//                     },
//                     notEmpty: {
//                         message: 'Please enter your Last Name'
//                     }
//                 }
//             },
// 			 username: {
//                 validators: {
//                      stringLength: {
//                         min: 8,
//                     },
//                     notEmpty: {
//                         message: 'Please enter your Username'
//                     }
//                 }
//             },
// 			 userpassword: {
//                 validators: {
//                      stringLength: {
//                         min: 8,
//                     },
//                     notEmpty: {
//                         message: 'Please enter your Password'
//                     }
//                 }
//             },
// 			confirmpassword: {
//                 validators: {
//                      stringLength: {
//                         min: 8,
//                     },
//                     notEmpty: {
//                         message: 'Please confirm your Password'
//                     }
//                 }
//             },
//             email: {
//                 validators: {
//                     notEmpty: {
//                         message: 'Please enter your Email Address'
//                     },
//                     emailAddress: {
//                         message: 'Please enter a valid Email Address'
//                     }
//                 }
//             },
//             phone: {
//                 validators: {
//                   stringLength: {
//                         min: 10, 
//                         max: 10,
//                     notEmpty: {
//                         message: 'Please enter your Contact No.'
//                      }
//                 }
//             },
//             state: {
//                 validators: {
//                     notEmpty: {
//                         message: 'Please select your Department/Office'
//                     }
//                 }
//             },
//             country: {
//                 validators: {
//                     notEmpty: {
//                         message: 'Please select your Department/Office'
//                     }
//                 }
//             },
//             post: {
//                 validators: {
//                     notEmpty: {
//                         message: 'Please select your Department/Office'
//                     }
//                 }
//             },
//             area: {
//                 validators: {
//                     notEmpty: {
//                         message: 'Please select your Department/Office'
//                     }
//                 }
//             },
//             address: {
//                 validators: {
//                     notEmpty: {
//                         message: 'Please select your Department/Office'
//                     }
//                 }
//             },
//                 }
//             }
//         })
//         .on('success.form.bv', function(e) {
//             $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
//                 $('#contact_form').data('bootstrapValidator').resetForm();

//             // Prevent form submission
//             e.preventDefault();

//             // Get the form instance
//             var $form = $(e.target);

//             // Get the BootstrapValidator instance
//             var bv = $form.data('bootstrapValidator');

//             // Use Ajax to submit form data
//             $.post($form.attr('action'), $form.serialize(), function(result) {
//                 console.log(result);
//             }, 'json');
//         });
// });