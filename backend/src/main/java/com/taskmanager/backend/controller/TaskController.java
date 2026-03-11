package com.taskmanager.backend.controller;

import com.taskmanager.backend.model.Task;
import com.taskmanager.backend.model.TaskStatus;
import com.taskmanager.backend.model.User;
import com.taskmanager.backend.repository.UserRepository;
import com.taskmanager.backend.service.TaskService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.springframework.security.core.Authentication;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @Autowired
    private UserRepository userRepository;

    // CREATE TASK
    @PostMapping
    public Task createTask(@RequestBody Task task, Authentication authentication) {

        String email = authentication.getName();

        return taskService.createTask(task, email);
    }

    // GET USER TASKS
    @GetMapping
    public Page<Task> getAllTasks(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            Authentication authentication) {

        String email = authentication.getName();

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Pageable pageable = PageRequest.of(page, size);

        return taskService.getUserTasks(user.getId(), pageable);
    }

    // UPDATE TASK STATUS
    @PutMapping("/{id}/status")
    public Task updateStatus(
            @PathVariable Long id,
            @RequestParam TaskStatus status) {

        return taskService.updateStatus(id, status);
    }

    // DELETE TASK
    @DeleteMapping("/{id}")
    public String deleteTask(@PathVariable Long id) {

        taskService.deleteTask(id);

        return "Task deleted successfully";
    }
}