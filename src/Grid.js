import React, { Component } from 'react'
import GridItem from './GridItem'
import Badge from './Badge'

export const categories = {
  FRUIT: 'Fruit',
  VEGETABLE: 'Vegetable',
  MEAT: 'Meat',
}

export const colors = {
  Fruit: 'orange',
  Vegetable: 'green',
  Meat: 'red',
}

// Dummy data
const fetchedData = [
  {
    name: 'Apple',
    category: categories.FRUIT,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem' +
      ' cumque dolorum facere fuga illo perferendis repellendus sapiente' +
      ' totam. A maxime molestiae natus obcaecati pariatur quaerat quasi' +
      ' rem sapiente voluptatem!',
  },
  {
    name: 'Aubergine',
    category: categories.VEGETABLE,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem' +
      ' cumque dolorum facere fuga illo perferendis repellendus sapiente' +
      ' totam. A maxime molestiae natus obcaecati pariatur quaerat quasi' +
      ' rem sapiente voluptatem!',
  },
  {
    name: 'Banana',
    category: categories.FRUIT,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem' +
      ' cumque dolorum facere fuga illo perferendis repellendus sapiente' +
      ' totam. A maxime molestiae natus obcaecati pariatur quaerat quasi' +
      ' rem sapiente voluptatem!',
  },
  {
    name: 'Broccoli',
    category: categories.VEGETABLE,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem' +
      ' cumque dolorum facere fuga illo perferendis repellendus sapiente' +
      ' totam. A maxime molestiae natus obcaecati pariatur quaerat quasi' +
      ' rem sapiente voluptatem!',
  },
  {
    name: 'Chicken',
    category: categories.MEAT,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem' +
      ' cumque dolorum facere fuga illo perferendis repellendus sapiente' +
      ' totam. A maxime molestiae natus obcaecati pariatur quaerat quasi' +
      ' rem sapiente voluptatem!',
  },
  {
    name: 'Orange',
    category: categories.FRUIT,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem' +
      ' cumque dolorum facere fuga illo perferendis repellendus sapiente' +
      ' totam. A maxime molestiae natus obcaecati pariatur quaerat quasi' +
      ' rem sapiente voluptatem!',
  },
  {
    name: 'Beef',
    category: categories.MEAT,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem' +
      ' cumque dolorum facere fuga illo perferendis repellendus sapiente' +
      ' totam. A maxime molestiae natus obcaecati pariatur quaerat quasi' +
      ' rem sapiente voluptatem!',
  },
  {
    name: 'Zucchini',
    category: categories.VEGETABLE,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem' +
      ' cumque dolorum facere fuga illo perferendis repellendus sapiente' +
      ' totam. A maxime molestiae natus obcaecati pariatur quaerat quasi' +
      ' rem sapiente voluptatem!',
  },
]

class Grid extends Component {
  // Initial state
  state = {
    visibleCategories: [
      categories.FRUIT,
      categories.VEGETABLE,
      categories.MEAT,
    ],
  }

  // Function to check if a category is visible
  isVisibleCategory = category =>
    this.state.visibleCategories.indexOf(category) > -1

  // Function to update the list of visible categories
  checkItem = ({ target }) => {
    const { visibleCategories } = this.state
    let newCategories = visibleCategories
    if (this.isVisibleCategory(target.name))
      newCategories = visibleCategories.filter(item => item !== target.name)
    else newCategories.push(target.name)

    this.setState({ visibleCategories: newCategories })
  }

  render() {
    // Filter items by selected categories
    const data = fetchedData.filter(item =>
      this.isVisibleCategory(item.category),
    )

    return (
      <div>
        <div className="filters">
          <span className="filter-label">Filter:</span>
          <Badge color={colors[categories.MEAT]}>
            <label>
              <input
                type="checkbox"
                checked={this.isVisibleCategory(categories.MEAT)}
                onChange={this.checkItem}
                name={categories.MEAT}
              />
              {categories.MEAT}
            </label>
          </Badge>
          <Badge color={colors[categories.VEGETABLE]}>
            <label>
              <input
                type="checkbox"
                checked={this.isVisibleCategory(categories.VEGETABLE)}
                onChange={this.checkItem}
                name={categories.VEGETABLE}
              />
              {categories.VEGETABLE}
            </label>
          </Badge>
          <Badge color={colors[categories.FRUIT]}>
            <label>
              <input
                type="checkbox"
                checked={this.isVisibleCategory(categories.FRUIT)}
                name={categories.FRUIT}
                onChange={this.checkItem}
              />
              {categories.FRUIT}
            </label>
          </Badge>
        </div>
        <div className="grid">
          {data.map((item, index) => (
            <GridItem key={index} {...item} />
          ))}
        </div>
      </div>
    )
  }
}

export default Grid
