import React, { useState, useEffect } from 'react';

export default function Scroll() {
    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(
                window.scrollY / 2
            )
        })
    }, [])

    console.log(scroll);

    return (
        <div>
            <div className="scroll" style={{ width: `${scroll}px` }}>
            </div>
            <div className="wrapper">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam alias quaerat, qui nesciunt perferendis voluptatem adipisci voluptates assumenda at quo dolore laborum optio necessitatibus dignissimos eligendi voluptas vel distinctio temporibus vero culpa. Sunt ullam impedit et saepe. Commodi quae officiis illo eligendi, sapiente iste reprehenderit, necessitatibus ut earum quisquam et doloremque aliquid dolore esse quidem magnam cumque placeat libero doloribus hic. Molestiae enim fuga quo. Dolore culpa est ipsum, vero quos non perferendis deserunt odio alias. At ullam incidunt obcaecati quos fugiat, ex aperiam earum aliquid, dolorem cupiditate temporibus numquam eligendi quo, dolores ad maxime? Ipsum ipsam vero ratione autem inventore? Et delectus, ab eos, ipsam voluptatibus, atque fuga veniam deserunt eum pariatur voluptates. Saepe, iste! Quos sequi temporibus nesciunt autem, alias voluptatum reprehenderit nam numquam minus aspernatur illum quisquam sint eveniet dolorem esse mollitia velit sunt iste necessitatibus? Minus maiores mollitia quia tempora ipsum fuga saepe temporibus vel reprehenderit ex magni soluta quae libero harum, necessitatibus eligendi dolore laudantium nesciunt maxime voluptates. Reprehenderit amet quidem blanditiis sunt saepe, atque asperiores repellendus, voluptate fugit aut aliquid, mollitia natus veritatis officiis dolor. Hic doloribus quia ipsum reprehenderit minus architecto suscipit ex modi veritatis. Praesentium et laborum nostrum deserunt quae aspernatur magnam!
            </p>
            </div>
        </div>
    )
}