type FaceCard = "Jack" | "Queen" | "King" ;
type NumberCard = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type Ace = 1| 11;
class card{

    constructor(private NumberCard: NumberCard, private FaceCard: FaceCard, private AceCard: Ace,private currentSum: number,  private TotalSum: number) {
        this.NumberCard = NumberCard;
        this.FaceCard = FaceCard;
        this.AceCard = AceCard;
        this.currentSum = currentSum;
        this.TotalSum = TotalSum;
    }

    getNumberCardVal(): number{
        switch(this.NumberCard){
            case 2:
                return 2;
            case 3:
                return 3;
            case 4:
                return 4;
            case 5:
                return 5;
            case 6:
                return 6;
            case 7:
                return 7;
            case 8:
                return 8;
            case 9:
                return 9;
            case 10:
                return 10;
                
        }
    }

    getFaceCardVal(): number{
        switch(this.FaceCard){
            case "Jack":
                return 10;
            case "Queen":
                return 10;
            case "King":
                return 10;
        }
    }

    getCurrentSum(): number{
        return this.getFaceCardVal() + this.getNumberCardVal();
    }

    getTotalSum(): number{
        return this.getNumberCardVal() + this.getFaceCardVal() + this.getAceCardVal();
    }

    getAceCardVal(): number{
        if (this.getCurrentSum() < 10){
            return 11;
        }
        else{
            return 1;
        }
    }


}