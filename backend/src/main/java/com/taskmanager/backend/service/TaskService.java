package com.taskmanager.backend.service;

import com.taskmanager.backend.model.Task;
import com.taskmanager.backend.model.TaskStatus;
import com.taskmanager.backend.model.User;
import com.taskmanager.backend.repository.TaskRepository;
import com.taskmanager.backend.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private UserRepository userRepository;

    // CREATE TASK (attach task to logged-in user)
    public Task createTask(Task task, String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        task.setUser(user);

        return taskRepository.save(task);
    }

    // GET USER TASKS
    public Page<Task> getUserTasks(Long userId, Pageable pageable) {
        return taskRepository.findByUserId(userId, pageable);
    }

    // UPDATE STATUS
    public Task updateStatus(Long id, TaskStatus status) {

        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Task not found"));

        task.setStatus(status);

        return taskRepository.save(task);
    }

    // DELETE TASK
    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }
}