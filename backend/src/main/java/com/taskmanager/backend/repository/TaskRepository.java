package com.taskmanager.backend.repository;

import com.taskmanager.backend.model.Task;
import com.taskmanager.backend.model.TaskStatus;
import com.taskmanager.backend.model.Priority;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface TaskRepository extends JpaRepository<Task, Long> {

    Page<Task> findByUserId(Long userId, Pageable pageable);

    Page<Task> findByStatus(TaskStatus status, Pageable pageable);

    Page<Task> findByPriority(Priority priority, Pageable pageable);

}