class Page{
    constructor(url=null,next=null,prev=null){
        this.url = url;
        this.next = next;
        this.prev = prev;
    }
}

class BrowserHistory {
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage){
        this.head = new Page();
        this.tail = new Page();
        this.curr = new Page(homepage);
        this.head.next = this.curr;
        this.curr.prev = this.head;
        this.tail.prev = this.curr;
        this.curr.next = this.tail;
    }
    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        const page = new Page(url);
        this.curr.next = page;
        page.prev = this.curr;
        page.next = this.tail;
        this.tail.prev = page;
        this.curr = page;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        while(steps && this.curr.prev!=this.head){
            this.curr = this.curr.prev;
            steps--;
        }
        return this.curr.url;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        while(steps && this.curr.next!=this.tail){
            this.curr = this.curr.next;
            steps--;
        }
        return this.curr.url;
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
