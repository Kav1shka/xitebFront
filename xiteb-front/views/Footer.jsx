export default function Footer() {
    return (
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Newsletter */}
          <div>
            <h3 className="text-lg text-white font-semibold mb-2">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              There are many variations of passages of lorem ipsum available.
            </p>
            <div className="flex items-center space-x-2">
              <Input
                type="email"
                placeholder="Enter Your Mail"
                className="w-full px-4 py-2 rounded-md"
              />
              <Button className="bg-orange-500 text-white px-4 py-2 rounded-lg">
                Subscribe
              </Button>
            </div>
          </div>
  
          <div>
            <h3 className="text-lg text-white font-semibold mb-2">About Us</h3>
            <p>42 Lily Ave, Colombo 00600</p>
            <p>📞 +94 11 434 5757</p>
          </div>
          <div>
            <h3 className="text-lg text-white font-semibold mb-2">Latest News</h3>
            <ul className="space-y-2">
              <li>• Sed ut perspiciatis unde iste natus error sit voluptatem.</li>
              <li>• Sed ut perspiciatis unde iste natus error sit voluptatem.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-white font-semibold mb-2">Customer Service</h3>
            <ul className="space-y-2">
              <li>Support Forums</li>
              <li>Communication</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>
  
        <div className="max-w-6xl mx-auto mt-8 flex justify-between items-center border-t border-gray-700 pt-4">
          <p>© 2021 All Rights Reserved. Site by Xiteb®</p>
          <div className="flex space-x-4 text-gray-400">
            <FaFacebookF />
            <FaTwitter />
          </div>
        </div>
  
        <button className="fixed bottom-4 right-4 bg-orange-500 text-white p-3 rounded-full shadow-md">
          <ArrowUp size={20} />
        </button>
      </footer>
    );
  }
  