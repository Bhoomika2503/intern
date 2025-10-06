import { expect } from '@playwright/test';

exports.CartPage = class CartPage {


    constructor(page) {


        this.page = page

        this.firstproduct = page.locator("//div[text()='Sauce Labs Backpack']")
        this.secondproduct = page.locator("//div[text()='Sauce Labs Bike Light']")

    }

    async verifyProdyctsInCart(){

        await expect(this.firstproduct).toBeVisible()
        await expect(this.secondproduct).toBeVisible()
    }

}