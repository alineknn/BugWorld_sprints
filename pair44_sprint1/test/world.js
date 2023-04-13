QUnit.module('world', function() {
    QUnit.test('All is ok', assert => {
        assert.ok(() => {
             World.parse(
               `10
                10
                # # # # # # # # # #
                # 9 9 . . . . 3 3 #
                # 9 # . - - - - - #
                # . # - - - -  - - #
                # . . 5 - - - - - #
                # + . + + + + 5 . . #
                # + + + + + + # . #
                # + + + + + . # 9 #
                # 3 3 . . . . 9 9 #
                # # # # # # # # # #`)
        });
    });




    QUnit.test('Error: The field does not correspond to the indicated dimensions', assert => {
        assert.throws(() => {
             World.parse(
               `10
                13
                # # # # # # # # # #
                # 9 9 . . . . 3 3 #
                # 9 # . - - - - - #
                # . # - - - -  - - #
                # . . 5 - - - - - #
                # + . + + + + 5 . . #
                # + + + + + + # . #
                # + + + + + . # 9 #
                # 3 3 . . . . 9 9 #
                # # # # # # # # # #`)
        });
    });


    QUnit.test('Error: Value out of legal', assert => {
        assert.throws(() => {
                World.parse(
                `10
                10
                # # # # # # # # # #
                # 9 9 . . . . 3 3 #
                # 9 # . - - - - - #
                # . # - - - -  - - #
                # . . 5 - a - - - #
                # + . + + + + 5 . . #
                # + + + + + + # . #
                # + + + + + . # 9 #
                # 3 3 . . . . 9 9 #
                # # # # # # # # # #`)
        });
    });


    QUnit.test('Error: No red swarm', assert => {
        assert.throws(() => {
                World.parse(
                `10
                10
                # # # # # # # # # #
                # 9 9 . . . . 3 3 #
                # 9 # . - - - - - #
                # . # - - - -  - - #
                # . . 5 - a - - - #
                # . . . . . . 5 . . #
                # . . . . . . # . #
                # . . . . . . # 9 #
                # 3 3 . . . . 9 9 #
                # # # # # # # # # #`)
        });
    });




});