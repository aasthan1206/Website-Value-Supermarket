import React from 'react'

const Footer = () => {
  return (
    <div>
       <footer id="main-footer">
        <div id="block">
            <div>NEWSLETTER SIGNUP</div>
            <div class="desc">
                Be the first to know about sales and special promotions, tips, trends and more.
            </div>
            <div>
                <form class="my-form">
                    <div class="form-group">
                        <input type="email" name="email" placeholder="Enter your email..." className='outline-primary border-primary px-2 py-1 border-[1px] mb-2' />
                    </div>
                    <input class="button" type="submit" value="Subscribe" name="" className='text-sm bg-primary px-4 py-2 text-white' />
                </form>
            </div>
        </div>
        <div id="block">
            <div>BUSINESS INFORMATION</div>
            <ul class="my-list">
                <li><a href="#">Corporate Website</a></li>
                <li><a href="#">Download Company Brochure</a></li>
                <li><a href="#">Become a Supplier</a></li>
                <li><a href="#">Our Team</a></li>
                <li><a href="#">Work for Us</a></li>
            </ul>
        </div>
        <div id="block">
            <div>USEFUL INFORMATION</div>
            <ul class="my-list">
                <li><a href="#">Delivery Information</a></li>
                <li><a href="#">Refund Policy</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Frequently Asked Questions</a></li>
                <li><a href="#">Track Your Order</a></li>
            </ul>
        </div>
        <div id="block">
            <div>QUICK LINKS</div>
            <ul class="my-list">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Partner with US</a></li>
                <li><a href="#">Site Map</a></li>
            </ul>
        </div>
        <p class="copyright">Copyright &copy; 2018 Value Supermarket Limited - All right reserved</p>
    </footer>
    </div>
  )
}

export default Footer
