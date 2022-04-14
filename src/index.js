import React from "react"
import ReactDOM from "react-dom"
// import HelloWorld from "./components/HelloWorld"
import ExpenseEntryItem from "./components/ExpenseEntryItem"
import ExpenseEntryItemList from './components/ExpenseEntryItemList'
import MessageWithEvent from "./components/MessageWithEvent"
import ExpenseEntryItemListFn from "./components/ExpenseEntryItemListFn"
import Pager from "./components/Pager"

const item = { 
  id: 1, 
  name : "Grape Juice", 
  amount : 32.5, 
  spendDate: new Date("2020-10-10"), 
  category: "Food" 
}

const items = [
  { id: 1, name: "Pizza", amount: 80, spendDate: "2020-10-10", category: "Food" },
  { id: 2, name: "Grape Juice", amount: 30, spendDate: "2020-10-12", category: "Food" },
  { id: 3, name: "Cinema", amount: 210, spendDate: "2020-10-16", category: "Entertainment" },
  { id: 4, name: "Java Programming book", amount: 242, spendDate: "2020-10-15", category: "Academic" },
  { id: 5, name: "Mango Juice", amount: 35, spendDate: "2020-10-16", category: "Food" },
  { id: 6, name: "Dress", amount: 2000, spendDate: "2020-10-25", category: "Cloth" },
  { id: 7, name: "Tour", amount: 2555, spendDate: "2020-10-29", category: "Entertainment" },
  { id: 8, name: "Meals", amount: 300, spendDate: "2020-10-30", category: "Food" },
  { id: 9, name: "Mobile", amount: 3500, spendDate: "2020-11-02", category: "Gadgets" },
  { id: 10, name: "Exam Fees", amount: 1245, spendDate: "2020-11-04", category: "Academic" }
]

const pageCount = 3

/*
ReactDOM.render(
  <React.StrictMode>
    <ExpenseEntryItem 
      item={item}
      />
  </React.StrictMode>,
  document.getElementById("root")
)
*/

/*
ReactDOM.render(
  <React.StrictMode>
    <div>
      <MessageWithEvent name="React" />
      <MessageWithEvent name="React developer" />
    </div>

    <ExpenseEntryItemList 
      items={items} 
      header={
        <div><h1>Expense manager</h1></div>
      }
      footer={
        <div style={{ textAlign: "left" }}>
          <p style={{ fontSize: 12 }}>Sample application</p>
        </div>
      } 
    />
  </React.StrictMode>,
  document.getElementById('root')
)
*/

/*
ReactDOM.render(
  <React.StrictMode>
    <div>
      <MessageWithEvent name="React" />
      <MessageWithEvent name="React developer" />
    </div>

    <ExpenseEntryItemListFn items={items} />
  </React.StrictMode>,
  document.getElementById('root')
)
*/

ReactDOM.render(
  <React.StrictMode>
    <div>
      <MessageWithEvent name="React" />
      <MessageWithEvent name="React developer" />
    </div>

    <Pager
      items={items}
      pageCount={pageCount}
      render={
        pagerState => (
           <div>
              <ExpenseEntryItemList 
                items={pagerState.items} 
                onDelete={pagerState.deleteHandler} 
              />
           </div>
        )
      }
    />
  </React.StrictMode>,
  document.getElementById('root')
)