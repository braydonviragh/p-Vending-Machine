class VendingMachine { 
    constructor(inventory) { 
        //a dollar per snack
        price = 1;
        //no money added at start
        balance = 0;
        //no selection made yet
        snack_selection = null;

        //once dispensed = true - inventory will -1.
        dispensed = false;

        //receive inventory from inventory class
        inventory = { 
            chips: 100, //inventory.chips
            candy_bars: 25, //inventory.candy_bars
            mints: 6 //6 packs of mints
        }

    }

    //switch from main flow case to provide snack selection;
    selection(snack) { 
        //if snack is in stock, then grab it and set it as current selection
        if(this.inventory[snack] > 0) { 
            this.snack_selection = snack;
            this.payment(snack);
        } else { 
            console.log("Out of Stock, select again");
        }
    }

    tapCard() { 
        this.balance = this.balance + 1;
    }

    refundMoney() { 
        this.balance = 0;
    }

  
    payment(snack) { 
        if(this.snack_selection =! null && this.balance >= this.price) { 
            this.balance = this.balance - this.price;
            this.dispenseSnack(snack)
        } else { 
            alert("error with payment. Please tap card");
            this.refundMoney();

        }

    }

    dispenseSnack(snack) {
        try {
            console.log("enjoy your " + snack);
            this.inventory[snack] = his.inventory[snack] - 1;
            this.selection = null;
            
        } catch {
            console.log("dispensing error");
            this.refundMoney();
        }
       
    }   

}


//Case Switch 
//var inventory = new Inventory;
//var inventoryCheck = Inventory.updateInventory;
var v = new VendingMachine();

var selection;
//Selection could be 0 for Chips, 1 for Candy bars, 2 for Mints

switch(selection) { 
    case "Chips":
        v.selection(selection);
        break;
    case "Candy Bar":
        v.selection(selection);
        break;
    case "Mint":
        v.selection(selection);
        break;
}

