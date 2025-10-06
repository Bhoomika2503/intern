import { expect } from '@playwright/test';

exports.inventoryPage = class inventoryPage {


    constructor(page) {


        this.page = page

        this.firstproduct = page.locator("//div[text()='Sauce Labs Backpack']/../../../div[2]/button")
        this.secondproduct = page.locator("//div[text()='Sauce Labs Bike Light']/../../../div[2]/button")
        this.cartlink = page.locator('.shopping_cart_link')
    }

    async productselect(productname){

        return this.page.locator(`//div[text()='${productname}']/../../../div[2]/button`)
    }

    async addProductstoCart(){

        await this.productselect("Sauce Labs Backpack").click()
        await this.productselect("Sauce Labs Bike Light").click()
    }

    async navigatetoCart(){

        await this.cartlink.click()
    }

}