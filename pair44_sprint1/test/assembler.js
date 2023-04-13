QUnit.module('assembler', function() {
    QUnit.test('Error: typos/non-existent tokens', assert => {
        assert.throws(() => {
            new Assembler().assemble(`sense unrecognizable_word 1 3 food ; [ 0]
                                move 2 0 ; [ 1]
                                pickup 8 0 ; [ 2]
                                flip 3 4 5 ; [ 3]
                                turn left 0 ; [ 4]
                                flip 2 6 7 ; [ 5]
                                turn right 0 ; [ 6]
                                move 0 3 ; [ 7]
                                sense ahead 9 11 home ; [ 8]
                                move 10 8 ; [ 9]
                                drop 0 ; [10]
                                flip 3 12 13 ; [11]
                                turn left 8 ; [12]
                                flip 2 14 15 ; [13]
                                turn right 8 ; [14]
                                move 8 11 ; [15]
                                `)
        });
    });

    QUnit.test('Error: incorrect use of the command / missing token', assert => {
        assert.throws(() => {
            new Assembler().assemble(`
                                sense ahead 1 3 food ; [ 0]
                                move 2 ; [ 1] absent value
                                pickup 8 0 ; [ 2]
                                flip 3 4 5 ; [ 3]
                                turn left 0 ; [ 4]
                                flip 2 6 7 ; [ 5]
                                turn right 0 ; [ 6]
                                move 0 3 ; [ 7]
                                sense ahead 9 11 home ; [ 8]
                                move 10 8 ; [ 9]
                                drop 0 ; [10]
                                flip 3 12 13 ; [11]
                                turn left 8 ; [12]
                                flip 2 14 15 ; [13]
                                turn right 8 ; [14]
                                move 8 11 ; [15]
                                `)
        })
    });

    QUnit.test('Error: lack of commands', assert => {
        assert.throws(() => {
            new Assembler().assemble(`; there is nothing else here, just this comment`)
        })
    });

    QUnit.test('Error: link to a non-existent line', assert => {
        assert.throws(() => {
            new Assembler().assemble(`
                                    sense ahead 1 3 food ; [ 0]
                                    move 2 0 ; [ 1]
                                    pickup 8 0 ; [ 2]
                                    flip 3 4 5 ; [ 3]
                                    turn left 0 ; [ 4]
                                    flip 2 6 1223674 ; [ 5]
                                    turn right 0 ; [ 6]
                                    move 0 3 ; [ 7]
                                    sense ahead 9 11 home ; [ 8]
                                    move 10 8 ; [ 9]
                                    drop 0 ; [10]
                                    flip 3 12 13 ; [11]
                                    turn left 8 ; [12]
                                    flip 2 14 15 ; [13]
                                    turn right 8 ; [14]
                                    move 8 11 ; [15]
                                    `)
        })
    });

    QUnit.test('Does not throw', assert => {    
        assert.ok(() => {
            new Assembler().assemble(`
                            sense ahead 1 3 food ; [ 0]
                            move 2 0 ; [ 1]
                            pickup 8 0 ; [ 2]
                            flip 3 4 5 ; [ 3]
                            turn left 0 ; [ 4]
                            flip 2 6 7 ; [ 5]
                            turn right 0 ; [ 6]
                            move 0 3 ; [ 7]
                            sense ahead 9 11 home ; [ 8]
                            move 10 8 ; [ 9]
                            drop 0 ; [ 10]
                            flip 3 12 13 ; [ 11]
                            turn left 8 ; [ 12]
                            flip 2 14 15 ; [ 13]
                            turn right 8 ; [ 14]
                            move 8 11 ; [ 15]
                            `)
        });
    });

    QUnit.test('Ok', assert => {
        const mockBug = {
            str: "",
            sense(_dir, _cond) {
                this.str += "0";
                return true;
            },
            mark(_int) {
                this.str += "1";
            },
            unmark(_int) {
                this.str += "2";
            },
            pickUp() {
                this.str += "3";
                return true;
            },
            drop() {
                this.str += "4";
            },
            turn(_dir) {
                this.str += "5";
            },
            move() {
                this.str += "6";
                return true;
            }
        }
        var instruction = (new Assembler()).assemble(`
                                    sense ahead 1 7 marker 5
                                    mark 0 2
                                    unmark 0 3
                                    pickup 4 7
                                    drop 5
                                    turn left 6
                                    move 7 0
                                    flip 1 0 7
                                    `);
        console.log(instruction);
        for (let i = 0; i < 9; ++i) {
            instruction = instruction.execute(mockBug);
        }
        assert.equal(mockBug.str, "01234560")
    });
});