import "../assets/css/main.css"

export const ProjectsPage = ()  => {

    return (
        <>
        <div className="container py-5">
    <h1 className="mb-4 text-center">🚀 Peter's Projects</h1>

    {/* <!-- Skills Section --> */}
    <section className="mb-5">
      <h3>🛠 Tech Stacks Mastered</h3>
      <div className="tech-stack">
        <span>Java</span>
        <span>TypeScript</span>
        <span>React</span>
        <span>Node.js</span>
        <span>Firebase</span>
        <span>OracleDB</span>
        <span>HTML5</span>
        <span>CSS3</span>
        <span>Bootstrap 5</span>
      </div>
    </section>

    {/* <!-- Project Cards --> */}
    <div className="row row-cols-1 row-cols-md-2 g-4">

      {/* <!-- Project 1 --> */}
      <div className="col">
        <div className="card h-100 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Inventory Manager</h5>
            <p className="card-text">A full-stack inventory system with real-time updates and role-based access control.</p>
            <div className="mb-2">
              <span className="badge bg-success">99.9% Uptime</span>
              <span className="badge bg-info text-dark">+40% Performance Boost</span>
            </div>
            <h6>Tech Stack:</h6>
            <div className="tech-stack mb-3">
              <span>React</span><span>Node.js</span><span>Firebase</span><span>Bootstrap</span>
            </div>
            <h6>Code Snippet:</h6>
            {/* <pre><code>const updateStock = async (itemId, quantity) => {
  await firebase.firestore().collection('inventory').doc(itemId).update({
    stock: firebase.firestore.FieldValue.increment(quantity)
  });
};</code></pre> */}
          </div>
        </div>
      </div>

      {/* <!-- Project 2 --> */}
      <div className="col">
        <div className="card h-100 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Student Portal</h5>
            <p className="card-text">A secure portal for students to view grades, submit assignments, and track progress.</p>
            <div className="mb-2">
              <span className="badge bg-warning text-dark">Used by 1,200+ users</span>
            </div>
            <h6>Tech Stack:</h6>
            <div className="tech-stack mb-3">
              <span>Java</span><span>OracleDB</span><span>HTML</span><span>CSS</span>
            </div>
            <h6>Code Snippet:</h6>
            <pre><code>PreparedStatement stmt = conn.prepareStatement(
  "SELECT * FROM grades WHERE student_id = ?");
stmt.setInt(1, studentId);
ResultSet rs = stmt.executeQuery();</code></pre>
          </div>
        </div>
      </div>

      {/* <!-- Project 3 --> */}
      <div className="col">
        <div className="card h-100 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Portfolio Site</h5>
            <p className="card-text">A sleek, responsive personal site showcasing projects, resume, and contact info.</p>
            <h6>Tech Stack:</h6>
            <div className="tech-stack mb-3">
              <span>TypeScript</span><span>React</span><span>Bootstrap</span>
            </div>
            <h6>Code Snippet:</h6>
            {/* <pre><code>const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  return &lt;form&gt;...&lt;/form&gt;;
};</code></pre> */}
          </div>
        </div>
      </div>

    </div>

    {/* <!-- Experimental Zone --> */}
    <section className="mt-5">
      <h3>🧪 Experimental Zone</h3>
      <p>Here I explore compiler trade-offs, reactive patterns, and UI/UX experiments. These aren’t production-ready, but they reflect my curiosity and technical depth.</p>
      <ul>
        <li>⚙️ <strong>Reactive Form Builder</strong> – Dynamic schema-driven forms using TypeScript and React.</li>
        <li>🧩 <strong>OracleDB Query Visualizer</strong> – A tool to visualize execution plans and optimize joins.</li>
        <li>🎮 <strong>Stumble Guys Unlock Tracker</strong> – Event-based progress tracker with local caching.</li>
      </ul>
    </section>

    {/* <!-- Tech Stack Timeline --> */}
    <section className="mt-5">
      <h3>🧭 Tech Stack Timeline</h3>
      <ul className="list-group">
        <li className="list-group-item">🎓 University: Java, OracleDB, OOP fundamentals</li>
        <li className="list-group-item">💼 Internship Prep: React, Node.js, Firebase, async patterns</li>
        <li className="list-group-item">🧠 Personal Projects: TypeScript, UI/UX polish, edge-case handling</li>
      </ul>
    </section>

  </div>

        </>
    )
}