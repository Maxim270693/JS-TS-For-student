test('should take old men older then 90', () => {

    const ages = [18,20,21,1,100,90,14]

    const oldAges = ages.filter(age => age > 90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})
test('should take courses chipper 160 ', () => {

    const courses = [
        {title: 'CSS', price: 100},
        {title: 'JS', price: 200},
        {title: 'REACT', price: 150}
    ]

    const chipCourses = courses.filter(course => course.price < 160)

    expect(chipCourses.length).toBe(2)
    expect(chipCourses[0].price).toBe(100)
})
test('get only completed tasks', () => {

    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Coffee', isDone: false},
        {id: 4, title: 'Sugar', isDone: true}
    ]

    const completedTasks = tasks.filter(t => t.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[1].isDone).toBe(true)
    expect(completedTasks[1].title).toBe('Sugar')
})