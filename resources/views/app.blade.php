<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Clucker3</title>

        <link rel="stylesheet" type="text/css" href="{{  url('/css/app.css') }}">

    </head>
    <body>
        <div id="app">
            <div class="col-md-8">

                <playlist></playlist>

            </div>
        </div>


        </div>
        <script type="text/javascript" src="{{  url('/js/app.js') }}"></script>
    </body>
</html>
