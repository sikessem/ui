<?php

namespace Tests\Unit;

it('should render anonymous component', function () {
    $this->blade(<<<'BLADE'
<x-ui-base-layout>
    Hello World!
</x-ui-base-layout>
BLADE)->assertSeeInOrder(['ui-root', config('app.name', 'Sikessem'), 'ui-app', 'Hello World!']);

    $this->blade(<<<'BLADE'
<x-ui::base-layout>
    <x-slot:head>
        <meta name="author" content="Sigui Kessé Emmanuel"/>
    </x-slot:head>
    <x-slot:body>
        Hello World!
    </x-slot:body>
</x-ui::base-layout>
BLADE)->assertSeeInOrder(['Sigui Kessé Emmanuel', 'Hello World!']);
});