export default function About() {
    return (
        <section className="flex flex-col">
            <div className="flex flex-col md:flex-row">
                <div className="h-[30rem] w-screen md:w-1/2 bg-[url('/alexander-andrews-JYGnB9gTCls-unsplash.jpg')] bg-cover bg-center"></div>
                <div className="h-[30rem] w-screen md:w-1/2 bg-white p-[3rem] md:p-[6rem] flex flex-col justify-center">
                    <h3 className="text-leader pb-8">On-Demand Advice</h3>
                    <p className="text-about leading-8">
                        Sometimes all you need is an impartial opinion to help you avoid costly mistakes or to make decisions faster. 
                        I am on hand to provide experienced advice when it counts the most.
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse">
                <div className="h-[30rem] w-screen md:w-1/2 bg-[url('/paul-skorupskas-7KLa-xLbSXA-unsplash.jpg')] bg-cover bg-center"></div>
                <div className="h-[30rem] w-screen md:w-1/2 bg-white p-[3rem] md:p-[6rem] flex flex-col justify-center">
                    <h3 className="text-leader pb-8">Focus For Your CTO</h3>
                    <p className="text-about leading-8">
                        As your business grows, the CTO role will grow in complexity. At times you will be a tech lead. At other times you will be a manager... or accountant.
                        I'm happy to share the load with you; let you focus on what is most important.
                    </p>
                </div>            
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="h-[30rem] w-screen md:w-1/2 bg-[url('/priscilla-du-preez-aPa843frIzI-unsplash.jpg')] bg-cover bg-center"></div>
                <div className="h-[30rem] w-screen md:w-1/2 bg-white p-[3rem] md:p-[6rem] flex flex-col justify-center">
                    <h3 className="text-leader pb-8">Guidance For Your Engineers</h3>
                    <p className="text-about leading-8">
                        Your team deserves to be productive and happy. But do you have the time to know if either is true?
                        I can work directly with your team to ensure obstacles are removed from their path.
                   </p>
                </div> 
            </div>
        </section>
    )
}