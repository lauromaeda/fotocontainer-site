$(document).ready(function(){
  $(".form-validate.form-signin").validate({
    rules: {
			input_email: {
				required: true
			},
			input_password: {
				required: true
			}
		}
  });

  $(".form-validate.form-profile").validate({
    rules: {
			input_email: {
				required: true
			},
			input_password: {
				required: true
			}
		}
  });

  $(".form-validate.form-signup-photographer").validate({
    rules: {
			input_plan: {
				required: true
			},
			input_name: {
				required: true
			},
			input_email: {
				required: true
			},
			input_remail: {
				required: true,
        equalTo: "#input_email"
			},
			input_terms: {
				required: true
			},
			input_password: {
				required: false
			}
		},
    submitHandler: function() {
      Signup.photographer("qualquer valor");
      // alert("Liberou cadastro");
    }
  });

  $(".form-validate.form-signup-publisher").validate({
    rules: {
			input_plan: {
				required: true
			},
  		input_blog: {
  			required: true
  		},
  		input_name: {
  			required: true
  		},
  		input_email: {
  			required: true
  		},
  		input_remail: {
  			required: true,
        equalTo: "#input_email"
  		},
  		input_terms: {
  			required: true
  		},
  		input_password: {
  			required: false
  		}
  	},
    submitHandler: function() {
      Signup.publisher("qualquer valor");
      // alert("Liberou cadastro");
    }
  });

  $(".form-validate.form-profile").validate({
    rules: {
			input_name: {
				required: true
			}
  	},
    submitHandler: function() {
      Signup.publisher("qualquer valor");
      // alert("Liberou cadastro");
    }
  });



  jQuery.extend(jQuery.validator.messages, {
    required: "Este campo é obrigatório.",
    remote: "Por favor corrija este campo.",
    email: "Insira um endereço de e-mail válido.",
    url: "Insira uma URL válido.",
    date: "Insira uma data válida.",
    dateISO: "Insira uma data válida (ISO).",
    number: "Insira um número válido.",
    digits: "Insira apenas dígitos.",
    creditcard: "Insira um número de cartão válido.",
    equalTo: "Insira o mesmo valor novamente.",
    accept: "Insira um valor com uma extensão válida;",
    maxlength: jQuery.validator.format("Por favor, insira mais de {0} caracteres."),
    minlength: jQuery.validator.format("Digite pelo menos {0} caracteres."),
    rangelength: jQuery.validator.format("Digite um valor entre {0} e {1} caracteres longos."),
    range: jQuery.validator.format("Digite um valor entre {0} e {1}."),
    max: jQuery.validator.format("Digite um valor menor ou igual a {0}."),
    min: jQuery.validator.format("Digite um valor maior ou igual a {0}.")
  });



});
