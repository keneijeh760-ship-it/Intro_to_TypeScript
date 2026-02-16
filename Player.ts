type CardCollection = [FaceCard, NumberCard, Ace];

class Player extends card {

    
    constructor(NumberCard: NumberCard, FaceCard: FaceCard, AceCard: Ace, private Bankroll: number, private Bet: number, private CardCollection: CardCollection) {
        super(NumberCard, FaceCard, AceCard);
        this.Bankroll = 100;
        this.Bet = Bet;
        this.CardCollection = this.CardCollection;
    }

    getBankroll(): number{
        return this.Bankroll;
    }

    getBet(): number{
        return this.Bet;
    }

    setBet(Bet: number): void{
        this.Bet = Bet;
    }

    getCardCollection(): Partial<CardCollection>{
        return this.CardCollection;
    }

    setCollection(CardCollection: CardCollection): void{
        this.CardCollection = CardCollection;
    }




}