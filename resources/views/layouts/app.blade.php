<!doctype html>
<html lang="{{ app()->getLocale() }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="shortcut icon" href="images/favicon.png">

    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Laravel</title>

    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    <!-- Bundle and Base CSS -->
    <link rel="stylesheet" href="assets/css/vendor.bundle.css?ver=161">
    <link rel="stylesheet" href="assets/css/style.css?ver=161">
    <!-- Color Scheme CSS -->
    <link rel="stylesheet" href="assets/css/theme.css?ver=161" id="theming">


  </head>

  <body class="nk-body body-wider bg-light-alt">
    <div id="app">
    </div>

    <!-- JavaScript -->
  	<script src="assets/js/jquery.bundle.js?ver=161"></script>
  	<script src="assets/js/scripts.js?ver=161"></script>
  	<script src="assets/js/charts.js"></script>

    <!-- vue -->
    <script src="{{ mix('/js/socket.io.js') }}"></script>
    <script>
      var ECHO_URL = "{{ env('ECHO_URL', 'http://' . Request::getHost()) }}";
      var API_URL = "{{ env('API_URL', 'http://' . Request::getHost()) }}";
    </script>
    <script src="{{ mix('js/app.js') }}"></script>
    <!-- End vue -->

  </body>
</html>
