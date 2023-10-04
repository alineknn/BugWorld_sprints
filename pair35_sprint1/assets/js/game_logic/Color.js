class Color {
    static RED = new Color("+", "red");
    static BLACK = new Color("-", "black");

    constructor(value, teamName) {
        this.value = value;
        this.teamName = teamName;
    }

    getOpposite() {
        if (this === Color.RED) {
            return Color.BLACK;
        } else {
            return Color.RED;
        }
    }
}
