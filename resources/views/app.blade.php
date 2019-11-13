<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Clucker3</title>

        <link rel="stylesheet" type="text/css" href="{{  url('/css/app.css') }}">

    </head>
    <body>

        <a class="nav-link active" href="#top"><img class="small-icon roost" src="{{url('/images/main-logo.png')}}" alt="Clucker logo"/>Top</a>
        <a class="nav-link active" href="#!"><img class="small-icon" src="{{url('/images/coop.png')}}" alt="Chicken coop"/>&nbsp &nbsp Home</a>
        <a class="nav-link" href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();"><img class="small-icon" src="{{url('/images/roast.png')}}" alt="Chicken coop"/>&nbsp &nbsp {{ __('Logout') }}</a>

        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">@csrf</form>

        <div id="app">
            <div class="col-md-8 row justify-content-center">

                <commentlist></commentlist>
                <giphy-results></giphy-results>


            </div>
        </div>


        </div>
        <script type="text/javascript" src="{{  url('/js/app.js') }}"></script>
    </body>
</html>
