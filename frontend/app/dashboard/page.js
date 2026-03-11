"use client";
import { useEffect, useState } from "react";
import {
  getTasks,
  createTask,
  deleteTask,
  updateTaskStatus
} from "../../services/api";
import { getToken, logout } from "../../utils/auth";
import { useRouter } from "next/navigation";

export default function Dashboard() {

  const router = useRouter();

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("MEDIUM");
  const [dueDate, setDueDate] = useState("");

  const [page, setPage] = useState(0);

  const [statusFilter, setStatusFilter] = useState("ALL");
  const [priorityFilter, setPriorityFilter] = useState("ALL");
  const [sortBy, setSortBy] = useState("NONE");

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.push("/login");
      return;
    }

    loadTasks();
  }, [page, statusFilter, priorityFilter, sortBy]);

  const loadTasks = async () => {
    try {
      const res = await getTasks(page, 10);
      let data = res.data.content || [];

      if (statusFilter !== "ALL") {
        data = data.filter(t => t.status === statusFilter);
      }

      if (priorityFilter !== "ALL") {
        data = data.filter(t => t.priority === priorityFilter);
      }

      if (sortBy === "PRIORITY") {
        const order = { HIGH: 3, MEDIUM: 2, LOW: 1 };
        data = [...data].sort((a, b) => order[b.priority] - order[a.priority]);
      }

      if (sortBy === "DUEDATE") {
        data = [...data].sort(
          (a, b) => new Date(a.dueDate || 0) - new Date(b.dueDate || 0)
        );
      }

      setTasks(data);

    } catch (error) {
      console.error("Failed to load tasks:", error);
    }
  };

  const handleCreateTask = async () => {

    if (!title.trim()) {
      alert("Task title required");
      return;
    }

    const payload = {
      title: title.trim(),
      description: description.trim(),
      status: "TODO",
      priority: priority,
      dueDate: dueDate ? `${dueDate}T00:00:00` : null
    };

    try {
      await createTask(payload);

      setTitle("");
      setDescription("");
      setPriority("MEDIUM");
      setDueDate("");

      loadTasks();

    } catch (error) {
      console.error("Create task failed:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      loadTasks();
    } catch (error) {
      console.error("Delete task failed:", error);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await updateTaskStatus(id, status);
      loadTasks();
    } catch (error) {
      console.error("Status update failed:", error);
    }
  };

  return (

    <div className="container">

      <div className="content">

        <div className="header">

          <h1>Task Manager</h1>

          <button
            className="logout"
            onClick={() => {
              logout();
              router.push("/login");
            }}
          >
            Logout
          </button>

        </div>

        {/* Create Task */}
        <div className="card">

          <h3>Create Task</h3>

          <div className="taskForm">

            <input
              placeholder="Task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="LOW">LOW</option>
              <option value="MEDIUM">MEDIUM</option>
              <option value="HIGH">HIGH</option>
            </select>

            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />

            <button onClick={handleCreateTask}>
              Add
            </button>

          </div>

        </div>

        <div className="filters">

          <strong>Filters:</strong>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="ALL">All Status</option>
            <option value="TODO">TODO</option>
            <option value="IN_PROGRESS">IN PROGRESS</option>
            <option value="DONE">DONE</option>
          </select>

          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
          >
            <option value="ALL">All Priority</option>
            <option value="LOW">LOW</option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="HIGH">HIGH</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="NONE">No Sorting</option>
            <option value="PRIORITY">Sort by Priority</option>
            <option value="DUEDATE">Sort by Due Date</option>
          </select>

        </div>

        {tasks.map(task => (

          <div key={task.id} className="taskCard">

            <div className="taskRow">

              <div>

                <h3>{task.title}</h3>
                <p>{task.description}</p>

                <div className="taskMeta">
                  Priority: <b>{task.priority}</b> |
                  Due: {task.dueDate ? task.dueDate.substring(0,10) : "None"}
                </div>

              </div>

              <div className="taskActions">

                <select
                  value={task.status}
                  onChange={(e)=>handleStatusChange(task.id,e.target.value)}
                >
                  <option value="TODO">TODO</option>
                  <option value="IN_PROGRESS">IN_PROGRESS</option>
                  <option value="DONE">DONE</option>
                </select>

                <button
                  className="delete"
                  onClick={()=>handleDelete(task.id)}
                >
                  Delete
                </button>

              </div>

            </div>

          </div>

        ))}

        {/* Pagination */}
        <div className="pagination">

          <button
            disabled={page===0}
            onClick={()=>setPage(page-1)}
          >
            Previous
          </button>

          <button
            onClick={()=>setPage(page+1)}
          >
            Next
          </button>

        </div>

      </div>

      <style jsx>{`

        .container{
          min-height:100vh;
          background:#f4f6fb;
          padding:40px 20px;
        }

        .content{
          max-width:1100px;
          margin:auto;
        }

        .header{
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:30px;
        }

        .logout{
          background:#111;
          color:white;
          border:none;
          padding:8px 16px;
          border-radius:6px;
          cursor:pointer;
        }

        .card{
          background:white;
          padding:25px;
          border-radius:12px;
          box-shadow:0 8px 25px rgba(0,0,0,0.06);
          margin-bottom:25px;
        }

        .taskForm{
          display:grid;
          grid-template-columns:2fr 2fr 1fr 1fr auto;
          gap:10px;
        }

        input,select{
          padding:8px 10px;
          border-radius:6px;
          border:1px solid #ddd;
        }

        button{
          padding:10px 16px;
          border:none;
          border-radius:6px;
          cursor:pointer;
          background:#4f46e5;
          color:white;
        }

        .filters{
          display:flex;
          flex-wrap:wrap;
          gap:10px;
          margin-bottom:20px;
          align-items:center;
        }

        .taskCard{
          background:white;
          padding:20px;
          border-radius:12px;
          margin-bottom:15px;
          box-shadow:0 6px 18px rgba(0,0,0,0.05);
        }

        .taskRow{
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:20px;
        }

        .taskActions{
          display:flex;
          gap:10px;
        }

        .delete{
          background:#ef4444;
        }

        .taskMeta{
          margin-top:8px;
          font-size:14px;
          color:#555;
        }

        .pagination{
          display:flex;
          gap:10px;
          margin-top:20px;
        }

        /* Mobile */
        @media(max-width:768px){

          .taskForm{
            grid-template-columns:1fr;
          }

          .taskRow{
            flex-direction:column;
            align-items:flex-start;
          }

          .taskActions{
            width:100%;
            justify-content:space-between;
          }

          .pagination{
            flex-direction:column;
          }

          .pagination button{
            width:100%;
          }

        }

      `}</style>
    </div>
  );
}