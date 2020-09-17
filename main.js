/* global $ */
$(document).ready(function () {



	const ajaxCall = () => {
		$.ajax(
			{
				url: "https://flynn.boolean.careers/exercises/api/array/music",
				method: "GET",
				success: function (data, stato) {
					let dataResponse = data.response;

					for (let i = 0; i < dataResponse.length; i++) {
						render(dataResponse[i]);
					}
				},
				error: function (richiesta, stato, errori) {
					alert("E' avvenuto un errore.", errori);
				}
			}
		);
	};


	const render = object => {
		const source = document.getElementById("cd-template").innerHTML;
		const template = Handlebars.compile(source);
		const html = template(object);

		$(".cds-container").append(html);
	}

	ajaxCall();


	$("#genre-select").change(function () {

		const value = $(this).val();
		console.log(value);

		$(".cds-container .cd").filter(function () {

			if (value == "all") {
				$(this).show();
			} else {
				$(this).toggle($(this).attr("data-genre").toLowerCase().includes(value));
			}
		});

	});


























});