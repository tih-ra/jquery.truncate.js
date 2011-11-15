jquery.truncate
============

Created by Andriy Bazyuta.

Add a limit to your textarea and input fields with label notification.


Usage
-----

## HTML
    <form>
        <label for='mytextarea'> My Textarea </label>
        <textarea name='mytextarea'></textarea>
    </form>

## jQuery

    $('textarea').truncate(200, $('label[for="mytextarea"]'))

## Return

    <label for='mytextarea'> My Textarea <span>200</span> </label>