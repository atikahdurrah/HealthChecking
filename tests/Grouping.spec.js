import {test, expect} from '@playwright/test'

test.beforeAll(async()=>{

    console.log('This is beforeAll Hook......')
})

test.afterAll(async()=>{
    console.log('This is afterAll Hook......')
})

test.beforeEach(async()=>{
    console.log('This is beforeEach Hook......')
})

test.beforeAll(async()=>{
    console.log('This is beforeAll Hook......')
})

test.describe.skip('Group1',()=>{
    test('Test1', async({page})=>{

        console.log('This is my Test1.....')
    })
    
    test('Test2', async({page})=>{
    
        console.log('This is my Test2.....')
    })    
})

test.describe.skip('Group2',()=>{
    test('Test3', async({page})=>{

        console.log('This is my Test3.....')
    })
    
    test('Test4', async({page})=>{
    
        console.log('This is my Test4.....')
    })
})

test('Test url', async({page})=>{

    console.log('This is my Test1.....')
})

test.only('Test2', async({page})=>{

    await page.goto('https://workflow-biz-staging.infineon.com/sites/TecTra/default.aspx')
})    
